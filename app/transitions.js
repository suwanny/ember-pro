const PHONE = 97531;

export default async function(){
  await Promise.resolve(4);

  // Add your transitions here, like:
    this.transition(
      this.fromRoute('posts.show'),
      this.toRoute('posts.show'),
      this.use('toUp'),
      this.reverse('toDown'),
      this.debug()
    );
}
