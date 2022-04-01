exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries and resets ids
    return knex('contestants')
      .truncate()
      .then(function() {
        return knex('contestants').insert([
          { name: 'Gabby', season: 25 },
          { name: 'Rachel', season: 25 },
          { name: 'Susie', season: 25  },
          { name: 'Serene', season: 25  },
          { name: 'Clayton', season: 25  },
        ]);
      });
  };
  