var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.collection.on('add remove', function(){
      this.render();
    }, this);
  },

   render: function(){
    this.$el.children().detach();
    return this.$el.html('<th>Playlist</th>')
      .append(this.collection.map(function(song, position){
        return new SongQueueEntryView({model: song}).render().prepend('<td>' + (position + 1) + '. </td>');
      }));
  }

});
