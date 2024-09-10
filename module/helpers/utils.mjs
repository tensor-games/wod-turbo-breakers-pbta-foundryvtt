/**
 * Define a set of template paths to pre-load
 */
export const preloadHandlebarsTemplates = async function () {
    return loadTemplates([
      'modules/wod-turbo-breakers-pbta-foundryvtt/templates/sheets/actor-sheet.hbs',
      'modules/wod-turbo-breakers-pbta-foundryvtt/templates/parts/actor-header.hbs',
      'modules/wod-turbo-breakers-pbta-foundryvtt/templates/parts/actor-attributes.hbs',
      'modules/wod-turbo-breakers-pbta-foundryvtt/templates/parts/actor-movelist.hbs',
      'modules/wod-turbo-breakers-pbta-foundryvtt/templates/parts/actor-equipment.hbs',
      'modules/wod-turbo-breakers-pbta-foundryvtt/templates/parts/actor-topbar.hbs',
    ]);

};
