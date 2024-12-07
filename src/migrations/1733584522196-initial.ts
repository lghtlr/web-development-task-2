import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1733584522196 implements MigrationInterface {
    name = 'Initial1733584522196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "login" character varying NOT NULL, "password_hash" character varying NOT NULL, "role" character varying NOT NULL, CONSTRAINT "UQ_2d443082eccd5198f95f2a36e2c" UNIQUE ("login"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_course" ("course_id" integer NOT NULL, "order_id" integer NOT NULL, CONSTRAINT "PK_38fdac41713a8e20da6f55f609a" PRIMARY KEY ("course_id", "order_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ac99d527b051e00234835c2a2e" ON "order_course" ("course_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_7ae945df836f49f5d5c1af752c" ON "order_course" ("order_id") `);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_course" ADD CONSTRAINT "FK_ac99d527b051e00234835c2a2ea" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order_course" ADD CONSTRAINT "FK_7ae945df836f49f5d5c1af752cc" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_course" DROP CONSTRAINT "FK_7ae945df836f49f5d5c1af752cc"`);
        await queryRunner.query(`ALTER TABLE "order_course" DROP CONSTRAINT "FK_ac99d527b051e00234835c2a2ea"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7ae945df836f49f5d5c1af752c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ac99d527b051e00234835c2a2e"`);
        await queryRunner.query(`DROP TABLE "order_course"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "courses"`);
    }

}
