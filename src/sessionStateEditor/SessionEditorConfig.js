(function (module) {



    function SessionEditorConfig() {

        Object.defineProperties(this, {

            "treeConfig": {
                value: new weavereact.TreeConfig()
            },
            showTree: {
                value: new weavejs.core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new weavejs.core.LinkableVariable()
            },
            modalConfig: {
                value: new weavereact.ModalConfig()
            }

        });

        this.dataTypesMap = {
            "weavejs.core.LinkableString": "S",
            "weavejs.core.LinkableNumber": "N",
            "weavejs.core.LinkableBoolean": "B"
        }


    }


    SessionEditorConfig.prototype.getDataType = function (treeItem) {
        return treeItem.data.FLEXJS_CLASS_INFO.names[0].qName;
    }



    module.exports = SessionEditorConfig;

}(module));
