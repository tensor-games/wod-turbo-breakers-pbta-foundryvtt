export function BreakersActorSheetMixin(Base) {
	return class BreakersActorSheet extends Base {
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
