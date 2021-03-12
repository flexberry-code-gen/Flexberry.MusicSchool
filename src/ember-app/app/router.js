import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-music-school-group-l');
  this.route('i-i-s-music-school-group-e',
  { path: 'i-i-s-music-school-group-e/:id' });
  this.route('i-i-s-music-school-group-e.new',
  { path: 'i-i-s-music-school-group-e/new' });
  this.route('i-i-s-music-school-lesson-l');
  this.route('i-i-s-music-school-lesson-e',
  { path: 'i-i-s-music-school-lesson-e/:id' });
  this.route('i-i-s-music-school-lesson-e.new',
  { path: 'i-i-s-music-school-lesson-e/new' });
  this.route('i-i-s-music-school-pupil-l');
  this.route('i-i-s-music-school-pupil-e',
  { path: 'i-i-s-music-school-pupil-e/:id' });
  this.route('i-i-s-music-school-pupil-e.new',
  { path: 'i-i-s-music-school-pupil-e/new' });
  this.route('i-i-s-music-school-teacher-l');
  this.route('i-i-s-music-school-teacher-e',
  { path: 'i-i-s-music-school-teacher-e/:id' });
  this.route('i-i-s-music-school-teacher-e.new',
  { path: 'i-i-s-music-school-teacher-e/new' });
});

export default Router;
