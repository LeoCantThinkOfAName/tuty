import { Prisma, PrismaClient } from "@prisma/client";

import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const currencies = [{ name: "TWD" }, { name: "USD" }];

const categories = [
  { name: "FIND_TUTOR" },
  { name: "FIND_STUDENT" },
  { name: "STUDY_GROUP" },
  { name: "SKILL_EXCHANGE" },
];

const subjects = [
  "英文",
  "Python",
  "鋼琴",
  "健身",
  "攝影",
  "吉他",
  "韓文",
  "JavaScript",
  "程式語言",
  "LeetCode",
  "HTML CSS",
  "WordPress",
  "前端",
  "後端",
  "iOS",
  "Android",
  "C++",
  "Java",
  "語言",
  "英語口說",
  "多益",
  "雅思",
  "托福",
  "日文",
  "中文",
  "西班牙文",
  "法文",
  "藝術與設計",
  "平面設計",
  "AI PS",
  "UI UX",
  "網頁設計",
  "電腦繪圖",
  "後製剪輯",
  "繪畫",
  "插畫",
  "3D",
  "音樂",
  "歌唱",
  "烏克麗麗",
  "樂理",
  "運動與活動",
  "重訓",
  "瑜珈",
  "游泳",
  "拳擊",
  "武術",
  "滑板",
  "羽毛球",
  "商業技能",
  "金融",
  "行銷企劃",
  "創業",
  "社群經營",
  "社群編輯",
  "Excel",
  "PPT",
  "簡報技巧",
  "廣告投放",
  "Google ADs",
  "SEO",
  "自我成長",
  "投資理財",
  "股市",
  "國家考試",
  "健康管理",
  "烹飪",
  "占卜",
];

const users: Prisma.usersCreateInput[] = new Array(10).fill(0).map(() => ({
  instance_id: null,
  id: faker.string.uuid(),
  aud: "authenticated",
  role: "authenticated",
  email: faker.internet.email().toLowerCase(),
  encrypted_password:
    "$2a$10$2KEK2AxPZp4mq1F/hPMisOYOCniPRlZCUSwwNVg/APXwdfVl.QYsK",
  email_confirmed_at: new Date(),
  invited_at: null,
  confirmation_token: null,
  confirmation_sent_at: null,
  recovery_token: null,
  recovery_sent_at: null,
  email_change_token_new: null,
  email_change: null,
  email_change_sent_at: null,
  last_sign_in_at: null,
  raw_app_meta_data: {},
  raw_user_meta_data: {},
  is_super_admin: false,
  created_at: new Date(),
  updated_at: null,
  phone: null,
  phone_confirmed_at: null,
  phone_change: null,
  phone_change_token: null,
  phone_change_sent_at: null,
  email_change_token_current: null,
  email_change_confirm_status: null,
  banned_until: null,
  reauthentication_token: null,
  reauthentication_sent_at: null,
  is_sso_user: false,
  deleted_at: null,
}));

const profiles: Prisma.profilesUncheckedCreateInput[] = new Array(10)
  .fill(0)
  .map((_, index) => ({
    name: faker.person.fullName(),
    createdAt: new Date(),
    id: faker.string.uuid(),
    description: faker.person.jobDescriptor(),
    title: faker.person.jobTitle(),
    img: null,
    userId: users[index].id,
  }));

const posts: Prisma.postsUncheckedCreateInput[] = new Array(100)
  .fill(0)
  .map(() => {
    const categoryId = faker.helpers.arrayElement([1, 2, 3, 4]);
    let charges: Partial<Prisma.postsUncheckedCreateInput> = {};

    // 1, 2 are tutor and student
    if (categoryId < 2) {
      charges = {
        rateType: faker.helpers.arrayElement([
          "day",
          "hour",
          "week",
          "month",
          "year",
        ]),
        rate: faker.number.int({ min: 200, max: 2000 }),
        currencyId: faker.helpers.arrayElement([1, 2]),
      };
    }

    return {
      id: faker.string.uuid(),
      authorId: faker.helpers.arrayElement(
        profiles.map((profile) => profile.id)
      ) as string,
      categoryId,
      content: faker.lorem.paragraphs(
        {
          min: 2,
          max: 10,
        },
        "<br/>\n"
      ),
      location: faker.location.city(),
      subject: faker.lorem.words({ min: 1, max: 3 }),
      createdAt: faker.date.between({
        from: new Date("2023/01/01"),
        to: new Date(),
      }),
      tags: faker.helpers.arrayElements(subjects, { min: 0, max: 5 }),
      objective: faker.helpers.arrayElement(subjects),
      ...charges,
    };
  });

async function main() {
  // seeding categories
  for (let i = 0; i < categories.length; i++) {
    const cate = await prisma.categories.upsert({
      where: { id: i + 1 },
      update: {},
      create: categories[i],
    });

    console.log(cate);
  }

  // seeding currencies
  for (let i = 0; i < currencies.length; i++) {
    const curr = await prisma.currencies.upsert({
      where: { id: i + 1 },
      update: {},
      create: currencies[i],
    });

    console.log(curr);
  }

  // clear tables
  await prisma.posts.deleteMany({});
  await prisma.profiles.deleteMany({});
  await prisma.users.deleteMany({});

  // seeding users
  for (let i = 0; i < users.length; i++) {
    const user = await prisma.users.create({
      data: users[i],
    });
    console.log(user);
    const profile = await prisma.profiles.create({
      data: profiles[i],
    });
    console.log(profile);
  }

  // seeding posts
  const createPosts = await prisma.posts.createMany({
    data: posts,
  });
  console.log(createPosts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
