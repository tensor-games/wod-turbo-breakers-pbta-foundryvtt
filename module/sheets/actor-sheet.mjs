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
            html.on('click', '.radio-unsettable', this._onClickUnsettableRadio.bind(this));
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

        /** Handle unsettable radio buttons
         * @private
         * @param {event} event
         */
        _onClickUnsettableRadio(event) {
            const element = event.target;
            if (element.type !== 'radio') {
                return;
            }
            function resolve(obj, path){
                var r=path.split(".");
                if(path){return resolve(obj[r.shift()], r.join("."));}
                return obj
            }
            const eName = element.name;
            var path = element.name.split('.');
            const currentVal = resolve(this.actor[path.shift()], path.join('.'));
            if (currentVal === element.value) {
                event.preventDefault();
                var jsonString = '{\"' + eName + '\": \"-1\"}';
                this.actor.update(JSON.parse(jsonString))
            }
        }

        /** @override */
		get template() {
			return 'modules/wod-turbo-breakers-pbta-foundryvtt/templates/sheets/actor-sheet.hbs';
		}

		/** @override */
		// async getData() {
		// 	const context = await super.getData();
        //     console.log(context)
        //     context.enrichedDescription = await TextEditor.enrichHTML(
        //         actor.system.details.notes.value,
        //         {
        //             // Only show secret blocks to owner
        //             secrets: this.document.isOwner,
        //             // For Actors and Items
        //             rollData: this.document.getRollData
        //         }
        //     );
		// 	return context;
		// }
	}
}
