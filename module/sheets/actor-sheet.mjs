export function BreakersActorSheetMixin(Base) {
	return class BreakersActorSheet extends Base {

        static get defaultOptions() {
            console.log("default options");
            console.log(super.defaultOptions);
            return mergeObject(super.defaultOptions, {
                width: 850,
                height: 1000,
            });
        }

		/** @override */
		get template() {
			return 'modules/wod-turbo-breakers-pbta-foundryvtt/templates/sheets/actor-sheet.hbs';
		}

		/** @override */
		// async getData() {
		// 	const context = await super.getData();
		// 	return context;
		// }
	}
}
