import { Injectable } from '@nestjs/common';
import {Strategy , ExtractJwt} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'qwerty'
        });
    }
    async validate(payload: any) {
        return {
            id: payload.id,
            nombre : payload.nombre,
            role: payload.role,
        }
    }
}