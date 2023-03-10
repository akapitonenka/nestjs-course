import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @IsString({ message: 'String' })
    @IsEmail({}, { message: 'Incorrect email' })
    readonly email: string;

    @IsString({ message: 'String' })
    @Length(4, 16, { message: 'Password should be from 4 to 16 characters' })
    readonly password: string;
}
