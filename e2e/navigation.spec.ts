import { expect, test } from '@playwright/test'

test('홈이 로드되고, 소개 페이지(별도 lazy 청크)로 이동한다', async ({
  page,
}) => {
  await page.goto('/')

  // 홈 페이지 진입 확인
  await expect(
    page.getByRole('heading', { name: '채용공고 기술 트렌드' }),
  ).toBeVisible()

  // 소개 페이지는 별도 청크 → 클릭 시 로드되어 표시되어야 한다
  await page.getByRole('link', { name: '소개' }).click()
  await expect(page.getByRole('heading', { name: '소개' })).toBeVisible()

  // 뒤로 가기 → 다시 홈
  await page.goBack()
  await expect(
    page.getByRole('heading', { name: '채용공고 기술 트렌드' }),
  ).toBeVisible()
})
