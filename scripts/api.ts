import { MarkdownRenderer } from "./html-generation/markdown-renderer";
import { AssetHandler } from "./html-generation/asset-handler";

export class Api
{
    public addStaticJs(name: string, contents: string)
    {
        AssetHandler.staticJs.set(name, contents);
    } 

    public removeStaticJs(name: string)
    {
        AssetHandler.staticJs.delete(name);
    } 

    public addPostProcessingStage(name: string, stage: MarkdownRenderer.PostProcessingStage)
    {
        MarkdownRenderer.postProcessStages.set(name, stage);
    }

    public removePostProcessingStage(name: string)
    {
        MarkdownRenderer.postProcessStages.delete(name);
    }
}