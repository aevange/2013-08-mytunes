var Song = Backbone.Model.extend({

  defaults: {timesPlayed: 0},

  initialize: function() {
    this.on('ended', function(){
      this.set('timesPlayed', this.get('timesPlayed') + 1 );
    }, this);
  },

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }

});
