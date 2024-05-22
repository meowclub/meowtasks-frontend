

export default interface IMeowUser {
  meowUserId: number;
  nickname: string;
  passwordHint: string;
  meowPoints?: number;
  avatar?: string;
  color?: string;
  createdAt: Date;
  updatedAt: Date
}