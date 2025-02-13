import { Boisson } from "../Boissons/IBoisson.ts";
export abstract class BoissonDecorateur implements Boisson{
    protected boisson : Boisson

    constructor(boisson : Boisson){
        this.boisson = boisson
    }

    abstract getDesciption(): string;
    abstract getCout(): number;

}