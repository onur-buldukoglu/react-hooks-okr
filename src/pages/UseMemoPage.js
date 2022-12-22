import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseMemoPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useMemo</Heading>
      <p>
        We can cache the result of a calculation between re-renders with
        useMemo.
      </p>
      <CodeSnippet>'useMemo example'</CodeSnippet>
      <p>
        useMemo takes two arguments, the first is a calculation function that
        takes no arguments and returns what we wanted to calculate, and the
        second is a list of dependecies that includes every value we used in the
        calculation. The return value of the hook is what is returned from the
        calculation function.
      </p>
      <p>
        Initially, the value will be what the calculator function would have
        returned. On every render after that, React will compare, using
        Object.is comparison, every value in the list of dependencies with their
        respective values from the previous render. If none of the values have
        changed, useMemo will return the memoized calculation value from the
        previous render. Otherwise, calculation function will re-run and the
        hook returns the new value.
      </p>
      <p>
        useMemo should only be used for performance optimization. It helps
        skipping unnecessary expensive recalculations and re-renders.
      </p>
      <Heading level={'h3'}>Skipping Component Re-renders</Heading>
      <p>
        When a component re-renders, all of its children also re-render by
        default. Memo lets us skip these re-renders if the components props are
        the same. In specific cases, such as creating a new object or array with
        the same values, prop comparison would not work the way we wanted.
        useMemo can help us solve this issue.
      </p>
      <p>
        By wrapping the calculation of the value we pass as the prop in useMemo,
        we ensure that it will stay unchanged as long as the dependencies do not
        change. Because the prop value is not regenerated, the memoized
        component will not re-render, even in the case of value being an object
        or an array.
      </p>
      <Heading level={'h3'}>Memoizing Another Hook's Dependency</Heading>
      <p>
        The same principle can also be applied to the dependencies of hooks. By
        wrapping the calculation of a dependency of a useMemo hook in another
        useMemo, we can avoid recalculations that would be caused by dependency
        changes.
      </p>
    </div>
  );
}

export default UseMemoPage;
