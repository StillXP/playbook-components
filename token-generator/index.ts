import { Supernova, JSONBuilderNamingOption, TokenJSONBuilderOptions, TokenJSONBuilder, TokenType } from "@supernovaio/supernova-sdk";
import * as fs from "fs-extra"

const key = "sn.C6UbzvJkSekzq6gp2OpsK5W9wCxVSidR0uw9oHPjeeNRtMoSYcgPjTkiY6T4DYkZ42jg6h5heNACRucEJzfK2R8t02VX42SC";
const DS_ID = "3099";
const DS_VERSION_ID = "21960";
const BRAND_ID = "21584";

async function getTokens() {
    const supernova = new Supernova(key, null, null)
    const version = await supernova.designSystemVersion(DS_ID, DS_VERSION_ID)
    const tokenTreeRoots = await version.tokenGroupTrees()

    let options: TokenJSONBuilderOptions = {
        naming: JSONBuilderNamingOption.original,
        includeBrandId: false,
        includeComments: false,
        brandId: null,
        includeType: true,
        includeRootTypeNodes: false,
        type: null,
        multifile: false
    }

    let sdTool = new TokenJSONBuilder(supernova, version)
    let sdRepresentation = sdTool.styleDictionaryRepresentation(options)
    sdRepresentation.then(function(result){
        console.log(result)
        fs.writeJson("tokens.json", result)
    })

}
getTokens();