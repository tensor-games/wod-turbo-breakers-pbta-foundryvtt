import {configSheet} from "./helpers/config-sheet.mjs"
import * as utils from "./helpers/utils.mjs";
import {BreakersActorSheetMixin} from "./sheets/actor-sheet.mjs";

// once the game has initialized, set up the module
Hooks.once('init', () => {

    const breakersActorSheet = BreakersActorSheetMixin(game.pbta.applications.actor.PbtaActorSheet);
    Actors.unregisterSheet('pbta', game.pbta.applications.actor.PbtaActorSheet, { types: ['character'] });
    Actors.registerSheet('pbta', breakersActorSheet, {
        types: ['character'],
        makeDefault: true,
        label: 'BREAKERS-SHEETS.SheetConfig.character',
    });

    // register wod-turbo-breakers-pbta-foundryvtt settings
    game.settings.register('wod-turbo-breakers-pbta-foundryvtt', 'settings-override', {
        name: game.i18n.localize("wod-turbo-breakers-pbta-foundryvtt.Settings.Title"),
        default: false,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: game.i18n.localize("wod-turbo-breakers-pbta-foundryvtt.Settings.Hint"),
        onChange: () => setTimeout(() => {
            location.reload();
        }, 500)
    });

    // Preload Handlebars stuff.
    utils.preloadHandlebarsTemplates();

    Handlebars.registerHelper("calculateXpSlots", function(level) {
        // HOORAY MATH
        const leveln = Number(level)
        const start = ((leveln ** 2)*0.5) - (leveln*0.5) +1
        const end = start + leveln -1
        const points = []
        for (var i = start; i<= end; i++) {
            points.push(i);
        }
        return points;
    });

    Handlebars.registerHelper("isLastLevel", function(options, level) {
        const levelVals = Object.keys(options)
        const max = levelVals.reduce((max, c) => c > max ? c : max)
        if(Number(max) === Number(level)) {
            return "-right";
        }
        return "";
    });

    Handlebars.registerHelper("setTalents", async function (system) {
        return await game.packs.get("wod-turbo-breakers-pbta-foundryvtt.talents").getDocuments({type: "move"}).then((data) => {
            system['talents'] = data;
            // console.log("DERP")
            // console.log(data);
            return data;
        });
    });
})

Hooks.once('pbtaSheetConfig', () => {

    // Disable the PbtA sheet config form.
    if (game.settings.settings.get('pbta.sheetConfigOverride')) game.settings.set('pbta', 'sheetConfigOverride', true);

    // Replace the game.pbta.sheetConfig with wod-turbo-breakers-pbta-foundryvtt version.
    configSheet();

    // PBTA Settings
    game.settings.set('pbta', 'advForward', false);
    game.settings.set('pbta', 'hideRollFormula', true);
    game.settings.set('pbta', 'hideForward', true);
    game.settings.set('pbta', 'hideOngoing', true);
    game.settings.set('pbta', 'hideRollMode', true);
    game.settings.set('pbta', 'hideUses', true);

    if (isNewerVersion(game.system.version, '1.0.4')) {
        game.settings.set('pbta', 'hideHold', true);
    }

    console.log("DERP DERP")

});

Hooks.on("renderActorSheet", async (app, html, options) => {

    // Automatically deselect other armor when one is checked
    $('.cell--attr-armorspeed').click(function(e) {
        const armor = $(e.currentTarget);
        const none = armor.find('input[name="system.attrLeft.armorspeed.options.0.value"]');
        const light = armor.find('input[name="system.attrLeft.armorspeed.options.1.value"]');
        const full = armor.find('input[name="system.attrLeft.armorspeed.options.2.value"]');

        none.change(
            function(){
                if ($(this).is(':checked')) {
                    light.prop('checked', false);
                    full.prop('checked', false);
                }
            });

        light.change(
            function(){
                if ($(this).is(':checked')) {
                    none.prop('checked', false);
                    full.prop('checked', false);
                }
            });

        full.change(
            function(){
                if ($(this).is(':checked')) {
                    none.prop('checked', false);
                    light.prop('checked', false);
                }
            });
    });

})
