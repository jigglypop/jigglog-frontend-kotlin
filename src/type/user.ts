import { IPost } from "./post";

export type IkakaoResponse = {
    profile: {
        id: number;
        kakao_account: {
            email: string;
        };
        properties: {
            nickname: string;
            profile_image: string;
        };
    };
};

export type ILogin = {
    username: string;
    password: string;
};

export type IUser = {
    id: number;
    username: string;
    hashedPassword: string;
    email: string;
    imageUrl: string | null;
    posts: IPost[];
};
