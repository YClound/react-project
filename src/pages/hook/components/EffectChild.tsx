import React, { useEffect, useState } from 'react';

const EffectChild = (props) => {
  const { effectDep } = props;
  const [name, setName] = useState(effectDep.name);

  useEffect(() => {
    setName(effectDep.name);
  }, [effectDep])

  return <div>
    {name}
  </div>
}

export default EffectChild;