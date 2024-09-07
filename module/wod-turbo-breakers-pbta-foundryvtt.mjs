import { configSheet } from "./helpers/config-sheet.mjs"

// once the game has initialized, set up the module
Hooks.once('init', () => {

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

})

Hooks.once('pbtaSheetConfig', () => {

    // Disable the PbtA sheet config form.
    if (game.settings.settings.get('pbta.sheetConfigOverride')) game.settings.set('pbta', 'sheetConfigOverride', true);

    // Replace the game.pbta.sheetConfig with wod-turbo-breakers-pbta-foundryvtt version.
    configSheet();

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
