import { db } from './db/index';
import { users } from './db/schema';

async function main() {
    // データ挿入
    await db.insert(users).values({
      name: "RP太郎",
      email:"test@test.com",
      password: "testMan",
      birthday: "2000-08-24",
    });

    // データ取得
    const result = await db.select().from(users);
    console.log(result);
}

main().catch((error) => {
    console.error('エラーが発生しました:', error);
});
