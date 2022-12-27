import Layout from '../Layout';

function PageWithLayout({ children }) {
  return (
    <Layout>
      <div className="flex flex-col gap-4 text-base">{children}</div>
    </Layout>
  );
}

export default PageWithLayout;
