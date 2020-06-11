import createApp from '/imports/app';
import { Meteor } from "meteor/meteor";

Meteor.startup(() => {
  createApp({ssr: false});
});
