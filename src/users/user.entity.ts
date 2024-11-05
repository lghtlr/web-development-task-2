export class User {
    id: number;
    login: string;
    password_hash: string;
    role: string; // роль (роль пользователя: администратор, модератор, пользователь).
}