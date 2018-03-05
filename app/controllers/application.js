import Ember from 'ember';
import { default as math, PI } from "math";

console.log("math", math);
console.log("PI", PI);

const { Controller, inject } = Ember;

export default Controller.extend({
  currentUser: inject.service()
});
