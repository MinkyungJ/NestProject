import { LoginService } from './login.services';
export declare class LoginController {
    private loginService;
    constructor(loginService: LoginService);
    login(body: any, res: any): Promise<{
        message: string;
    }>;
    logout(res: any): Promise<{
        message: string;
    }>;
}
