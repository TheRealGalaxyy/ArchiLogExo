import { Boisson } from "../Boissons/IBoisson.ts";
export abstract class DecorateurBase implements Boisson{
    protected boisson : Boisson

    constructor(boisson : Boisson){
        this.boisson = boisson
    }

    abstract getDesciption(): string;
    abstract getCout(): number;

}