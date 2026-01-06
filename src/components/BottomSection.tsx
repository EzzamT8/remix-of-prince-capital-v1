const BottomSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="heading-large text-foreground leading-tight">
            Now we've made — funding accessible to even more businesses{' '}
            <span className="inline-flex items-center space-x-2">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-muted-foreground rounded-full"></div>
              </div>
              <span>directly through our platform</span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;