-- Custom SQL migration file, put your code below! --
INSERT INTO "users" ("name", "email", "password", "birthday", "created_at", "updated_at") 
VALUES 
  ('rp太郎', 'test@rp.com', 'testMan', '2000-09-05', NOW(), NOW()),
  ('rp座衛門', 'clothing@clothing.com', 'clothing', '2000-10-10', NOW(), NOW());

INSERT INTO "search_conditions" ("users_id", "condition_name", "price_min", "price_max", "category", "word", "created_at", "updated_at") 
VALUES 
  (1, 'プチプラ', 0, 4000, ARRAY['トップス','ズボン・パンツ'], '', NOW(), NOW()),
  (1, '商談用', 20000, 40000, ARRAY['スーツ・セットアップ'], '', NOW(), NOW()),
  (2, 'お見合い用', NULL, NULL, ARRAY['オーバーオール'], '', NOW(), NOW());

INSERT INTO "purchase_history" ("users_id", "item_code", "date", "is_birthday_sale_use", "created_at", "updated_at")
VALUES
  (1,'3498743', '2024-10-23', false, NOW(), NOW()),
  (1,'3493475', '2024-11-23', false, NOW(), NOW()),
  (1,'3498837', '2024-10-23', false, NOW(), NOW()),
  (1,'1297799', '2024-09-05', true, NOW(), NOW()),
  (1,'2388', '2024-9-10', false, NOW(), NOW()),
  (2,'2388', '2024-9-10', false, NOW(), NOW()),

INSERT INTO "look_history" ("user_id", "item_code", "created_at", "updated_at")
VALUES
  (1,'33333', NOW(), NOW()),
  (1,'93879', NOW(), NOW()),
  (1,'98797', NOW(), NOW()),
  (1,'87823', NOW(), NOW()),
  (1,'9789', NOW(), NOW()),
  (1,'3767', NOW(), NOW()),
  (1,'1728', NOW(), NOW()),
  (1,'983', NOW(), NOW()),

INSERT INTO "favorite_item" ("users_id", "item_code", "created_at", "updated_at")
VALUES
  (1, '98765', NOW(), NOW()),
  (2, '87654', NOW(), NOW()),
  (1, '76543', NOW(), NOW());

INSERT INTO "favorite_shop" ("users_id", "shop_code", "created_at", "updated_at")
VALUES
  (1, '387', NOW(), NOW()),
  (2, '238', NOW(), NOW()),
  (1, '9700', NOW(), NOW());

INSERT INTO "cart" ("users_id", "item_code", "created_at", "updated_at")
VALUES
  (1, '54321', NOW(), NOW()),
  (2, '65432', NOW(), NOW()),
  (2, '76543', NOW(), NOW());
