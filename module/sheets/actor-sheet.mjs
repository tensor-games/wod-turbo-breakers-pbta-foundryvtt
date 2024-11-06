export function BreakersActorSheetMixin(Base) {
	return class BreakersActorSheet extends Base {

        static get defaultOptions() {
            // console.log("default options");
            // console.log(super.defaultOptions);
            return mergeObject(super.defaultOptions, {
                width: 850,
                height: 900,
            });
        }

        /** @override */
        activateListeners(html) {
            super.activateListeners(html);
            html.on('click', '.background-type', this._onClickBGType.bind(this));
            html.on('click', '.background-type-selected', this._onClickBGType.bind(this));
        }

        /** Handle clicking background type on sheet.
         * @private
         * @param {event} event
         */
        _onClickBGType(event) {
            event.preventDefault();
            const element = event.target;
            const dataset = element.dataset;
            if(this.actor.system.attributes.backgroundType.value === dataset.name) {
                this.actor.update({'system.attributes.backgroundType.value': ""})
            } else {
                this.actor.update({'system.attributes.backgroundType.value': dataset.name})
            }
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
