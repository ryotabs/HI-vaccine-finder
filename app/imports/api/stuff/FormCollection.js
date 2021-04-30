import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class FormCollection {
  constructor() {
    // The name of this collection.
    this.name = 'FormCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      owner: String,
      feelSick: Boolean,
      vaccinated: Boolean,
      vaccineShot: [{ type: String, optional: true }],
      allergies: [{ type: String, optional: true }],
      allergiesOther: Boolean,
      recentVaccine: Boolean,
      covidPositive: Boolean,
      antiBodyTreatment: Boolean,
      weakenedImmuneSys: Boolean,
      bloodDisorder: Boolean,
      pregnant: Boolean,
      dermalFillers: Boolean,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {FormCollection}
 */
export const FormCollections = new FormCollection();
