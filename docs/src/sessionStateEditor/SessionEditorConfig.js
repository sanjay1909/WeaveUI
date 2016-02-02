(function (module) {



    function SessionEditorConfig() {

        Object.defineProperties(this, {

            "treeConfig": {
                value: new TreeConfig()
            },
            showTree: {
                value: new weavejs.core.LinkableBoolean(false)
            },
            activeNodeValue: {
                value: new weavejs.core.LinkableVariable()
            }

        });

    }




    //Weave.registerClass('SessionEditorConfig', SessionEditorConfig);

    module.exports = SessionEditorConfig;

}(module));
