import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        sid: { refreshModel: true }
      },

      nextQueryParams: null,
    
      afterModel(model, transition) {
        console.log('model', model);
        console.log('transition', transition);
    
      },
    
      beforeModel() {
    
      },
      setupController(controller, model) {
        this._super(controller, model);
    
        console.log('inside controller');
        console.log('inside controller model', model);
        console.log('inside controller', controller);
      },
      model(params) {
        console.log('NEVER SEE IT');
        console.log('params', params);
    },
    actions: {
        executeQuery1() {
            console.log('inside route');
            this.transitionTo('index', {queryParams: { sid: 23 }});
        }
    }
});
