export class DataSource {
  private _username: string;
  private _password: string | undefined;
  private _entities: any[] = [];

  constructor(props: DataSourceProps) {
    this._username = props.user;
    this._password = props.password;
    props.entities.forEach((entity) => this._entities.push(entity));
  }
}

export type DataSourceProps = {
  user: string;
  password?: string;
  entities: any[];
};
