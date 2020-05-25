import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ChangeProductName1590415096243
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.changeColumn(
      'products',
      'provider',
      new TableColumn({
        name: 'name',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.changeColumn(
      'products',
      'name',
      new TableColumn({
        name: 'provider',
        type: 'varchar',
      }),
    );
  }
}
