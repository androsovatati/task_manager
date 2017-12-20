function navpanelDirective() {
    return {
        scope: {},
        bindToController: {
            'toggle': '='
        },
        templateUrl: './static/scripts/dev/components/navpanel/navpanel.tmpl.html',
        controller: function() {
            var self = this;
        },
        controllerAs: 'ctrl'
    }
}