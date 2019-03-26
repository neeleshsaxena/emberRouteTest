import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: [
    'sid'
  ],

  actions: {
    executeQuery() {
      this.send('executeQuery1');
    }
  }
});