//This thing is responsible for all this chaos
Events.on(EventType.WorldLoadEvent, () => {
    Vars.state.rules.teams.get(Team.sharded).blockHealthMultiplier = 0.1;
    Vars.state.rules.teams.get(Team.sharded).buildSpeedMultiplier = 10;
    Vars.state.rules.buildCostMultiplier = 10;
});

Events.on(ClientLoadEvent, e => {
    Blocks.coreShard.itemCapacity *= 10;
    Blocks.coreFoundation.itemCapacity *= 10;
    Blocks.coreNucleus.itemCapacity *= 10;
    Blocks.coreBastion.itemCapacity *= 10;
    Blocks.coreCitadel.itemCapacity *= 10;
    Blocks.coreAcropolis.itemCapacity *= 10;
    Blocks.mechanicalDrill.drillTime *= 1.25;
});

//Some customization to description of this mod
const mod = Vars.mods.locateMod("hardcore-mod");
mod.meta.displayName = "[orange]Hardcore Mod";
mod.meta.description = "[red] A single JS script that makes game a lot harder. \n \n [green]Thx [blue]Sputnic [green]for optimization and the idea of changing statistics using js script \n \n [orange]This mod: \n [white] 1. Makes all blocks cost 10 times more \n 2. Makes hp of blocks 10 times less \n 3. Makes itemCapacity in all Cores 10 times more (so you could place some blocks) \n 4. Makes buildCostMultiplier = 10 (so you can place blocks and not wait for eternity) \n 5. Idk makes early game a lil bit harder (drillTime of mechanicalDrill is *= 1.25)"
mod.meta.author = "[green]Lehanchic25, [blue] Sputnuc"
