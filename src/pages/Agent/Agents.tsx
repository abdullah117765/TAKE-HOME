import type { FC } from "react";
import { useState, useEffect } from "react";
import Agent from "../../components/Agents/Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";


const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
    }
    fetchInitialData();
  }, []);

  return (
    <div className="flex justify-center">
      {agents.map((agent) => (
        <Agent key={agent.id} agent={agent} />
      ))}
    </div>
  );
};

export default Agents;
