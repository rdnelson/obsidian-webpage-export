import { AssetHandler } from "./html-generation/asset-handler";

export class Api
{
    public addStaticJs(name: string, contents: string)
    {
        AssetHandler.addStaticJs(name, contents);
    } 
}