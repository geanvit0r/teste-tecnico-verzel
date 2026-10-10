
import { test, expect } from '@playwright/test';

const baseUrl = 'https://verzel-store.qa-test-verzel-store.workers.dev/';

test.beforeEach(async ({ page }) => {
  await page.goto(baseUrl);

  await page
    .getByRole('article', { name: 'Mochila Urbana 20L' })
    .getByRole('button')
    .click();

  await page
    .getByRole('link', { name: 'Carrinho 1 itens no carrinho' })
    .click();
});

async function aplicarCupom(page, codigo) {
  await page
    .getByRole('textbox', { name: 'Cupom de desconto' })
    .fill(codigo);

  await page
    .getByRole('button', { name: 'Aplicar cupom' })
    .click();
}

// CA01 e CA02 - Cupons válidos
const cuponsValidos = [
  'BEMVINDO10',
  'bEMvINDO10',
  '  bemvindo10  '
];

for (const cupom of cuponsValidos) {
  test(`Aplicar cupom válido: ${JSON.stringify(cupom)}`, async ({ page }) => {
    await aplicarCupom(page, cupom);

    await expect(
      page.getByText('Cupom BEMVINDO10 aplicado.Remover cupom')
    ).toBeVisible();

    await expect(page.locator("[data-valor='subtotal']")).toHaveText('R$ 100,00');
    await expect(page.locator("[data-valor='desconto']")).toHaveText('- R$ 10,00');
    await expect(page.locator("[data-valor='frete']")).toHaveText('R$ 19,90');
    await expect(page.locator("[data-valor='total']")).toHaveText('R$ 109,90'); 
  });
}

// CA03 - Cupom inválido
test('Aplicar cupom inválido', async ({ page }) => {
  await aplicarCupom(page, 'cupominvalido');

  await expect(page.locator('#mensagem-cupom'))
    .toBeVisible();

  await expect(page.locator('#mensagem-cupom'))
    .toHaveText('Cupom inválido.');
});

// CA04 - Cupom expirado
test('Aplicar cupom expirado', async ({ page }) => {
  await aplicarCupom(page, 'VERAO2026');

  await expect(page.locator('#mensagem-cupom'))
    .toBeVisible();

  await expect(page.locator('#mensagem-cupom'))
    .toHaveText('Cupom expirado.');
});
