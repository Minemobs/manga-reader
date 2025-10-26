import { Chapter, db, Manga } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db
    .insert(Manga)
    .values([
      {
        title: "Three Days of Happiness",
        id: 0,
        alternativeTitles:
          '["Le prix du reste de ma vie", "Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de."]',
        chapters: "[0]",
        cover: "https://meo.comick.pictures/WN1Rq.jpg",
        updated: new Date("2025-01-02"),
      },
      {
        title: "Osananananajimi",
        id: 1,
        alternativeTitles: ["おさななななじみ"],
        chapters: "[0]",
        cover: "https://public.ynjn.jp/key_visual/3686/keyvisual_osanananajimi.png"
      },
      {
        title: "4 Days of Happiness",
        id: 2,
        alternativeTitles:
          '["Le prix du reste de ma vie", "Jumyou wo Kaitotte Moratta. Ichinen ni Tsuki, Ichimanen de."]',
        chapters: "[0]",
        cover: "https://meo.comick.pictures/8Jq83.jpg",
        updated: new Date("2025-01-01"),
      },
    ]);

  await db.insert(Chapter).values([
    {
      id: 0,
      sourceURL: "https://shonenjumpplus.com/episode/10833497643049550167",
      pagesNumber: 35,
      pagesURLs: '["https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439536-33626cf0f0ac52ca1d1e0f5c2bc64396","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439537-420264094038849c5cfac6ed968a3f31","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439538-7070524866c32c7691bf8796f89b3d7b","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439539-d6832ad67faf3a854bd311b7ef7cd4b7","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439540-6bb8a74ec7969eb2a08b11ebfb5bc58a","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439541-17e4bd2f2a881de5c89491a6860840db","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439542-fe14876f2aee44462c1c0881e003faa8","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439543-9d0cde03051ae18d23ee82aa0bb3332f","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439544-cb286dbf0ea0de5dc494e056f6bedc5e","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439545-08a9a6924af337fc17d008a8e6979ed8","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439546-8e6ef6be04de35fc65a25ceeee21d34e","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439547-d3c335c1b4dd6e72059737db43af7f9f","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439548-52b0be8c75509f3b1f93303e14d1fefc","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439549-d56addc7ae6a5f0a578dccdc437d9c4d","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439550-cc1bca016f1bc2a916ccd03838ec111f","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439551-d71685b6b895a0c0902303344fc2476f","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439552-d1e0d8b151dc7d2d48b57442e99c0588","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439553-e72875d56bad69bd85e677ac7fdd56ef","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439554-92fb3e9c2294fa07fb5715c28b071f7e","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439555-91b339274fa270576bb36374d58ea41e","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439556-60bdabdf2963fbcc5565316db96c19d3","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439557-9191e65f425f2af0b817963404a59c91","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439558-3135bab5f0ba26f784e6b9ad454e9b3c","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439559-80d5bc8210b4fa44fade01bd48fecf1a","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439560-161a9d0520b18b8e6a133882eccc2670","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439561-9de31aee83812073fead0f3f057d1437","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439562-9e78bf3e7d4ac0b6e0bc635619e418cc","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439563-400245a770cb52efcdb1539a6f2ec61e","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439564-1fba4350a448aaab177c85cb940d0241","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439565-9a6b64ee28518e186efbe6386cd068d9","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439566-e401992211bfdb10407276a418ac68b4","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439567-2b790ff950bb68d8f7d0b7db2f4ab9ba","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439568-0174c6230d1dfaf08bc8d6393e886035","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439569-0728857487ab4f4cf00d958ec26f5802","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439570-6e33ccb5ea3785ea60d7f8c450c07c99","https://cdn-ak-img.shonenjumpplus.com/public/page/2/10834108156629439571-3bdd60062c8a30ee78fd3b2e86fb9bb6"]',
      mangaId: 0
    },
    {
      id: 0,
      usesSVGs: true,
      sourceURL: "https://ynjn.jp/viewer/23485/272748",
      pagesNumber: 35,
      pagesURLs: '["https://public.ynjn.jp/web_page/272748/20250702123619_019.webp","https://public.ynjn.jp/web_page/272748/20250702123619_020.webp","https://public.ynjn.jp/web_page/272748/20250702123619_021.webp","https://public.ynjn.jp/web_page/272748/20250702123619_023.webp","https://public.ynjn.jp/web_page/272748/20250702123619_024.webp","https://public.ynjn.jp/web_page/272748/20250702123619_025.webp","https://public.ynjn.jp/web_page/272748/20250702123619_026.webp","https://public.ynjn.jp/web_page/272748/20250702123619_027.webp","https://public.ynjn.jp/web_page/272748/20250702123619_028.webp","https://public.ynjn.jp/web_page/272748/20250702123619_029.webp","https://public.ynjn.jp/web_page/272748/20250702123619_030.webp","https://public.ynjn.jp/web_page/272748/20250702123619_031.webp","https://public.ynjn.jp/web_page/272748/20250702123619_032.webp","https://public.ynjn.jp/web_page/272748/20250702123619_033.webp","https://public.ynjn.jp/web_page/272748/20250702123619_034.webp","https://public.ynjn.jp/web_page/272748/20250702123619_035.webp","https://public.ynjn.jp/web_page/272748/20250702123619_036.webp","https://public.ynjn.jp/web_page/272748/20250702123619_037.webp","https://public.ynjn.jp/web_page/272748/20250702123619_038.webp","https://public.ynjn.jp/web_page/272748/20250702123619_039.webp","https://public.ynjn.jp/web_page/272748/20250702123619_040.webp","https://public.ynjn.jp/web_page/272748/20250702123619_041.webp","https://public.ynjn.jp/web_page/272748/20250702123619_042.webp","https://public.ynjn.jp/web_page/272748/20250702123619_043.webp","https://public.ynjn.jp/web_page/272748/20250702123619_044.webp","https://public.ynjn.jp/web_page/272748/20250702123619_045.webp","https://public.ynjn.jp/web_page/272748/20250702123619_046.webp","https://public.ynjn.jp/web_page/272748/20250702123619_047.webp","https://public.ynjn.jp/web_page/272748/20250702123619_048.webp","https://public.ynjn.jp/web_page/272748/20250702123619_049.webp","https://public.ynjn.jp/web_page/272748/20250702123619_050.webp","https://public.ynjn.jp/web_page/272748/20250702123619_051.webp","https://public.ynjn.jp/web_page/272748/20250702123619_052.webp","https://public.ynjn.jp/web_page/272748/20250702123619_053.webp","https://public.ynjn.jp/web_page/272748/20250702123619_054.webp","https://public.ynjn.jp/web_page/272748/20250702123619_055.webp","https://public.ynjn.jp/web_page/272748/20250702123619_056.webp","https://public.ynjn.jp/web_page/272748/20250702123619_057.webp","https://public.ynjn.jp/web_page/272748/20250702123619_058.webp"]',
      mangaId: 1
    },
  ]);
}
