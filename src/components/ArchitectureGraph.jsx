import React, { useState } from "react";
import { Network, Activity } from "lucide-react";

const nodes = [
  {
    id: "input",
    label: "Raw Ingestion",
    sub: "CSVs • API Streams",
    x: 80,
    y: 150,
    color: "#ff844f",
    detail: "Streaming data ingestion with automated schema detection & pandas profiling.",
    metric: "100k+ rows/sec",
  },
  {
    id: "fastapi",
    label: "FastAPI Engine",
    sub: "Async Microservice",
    x: 270,
    y: 110,
    color: "#ff6b35",
    detail: "Asynchronous REST backend handling high-concurrency requests & state caching.",
    metric: "<25ms Latency",
  },
  {
    id: "langgraph",
    label: "LangGraph Agents",
    sub: "Agentic AI Router",
    x: 480,
    y: 80,
    color: "#ff6b35",
    detail: "Cyclic state graphs orchestrating multi-agent tool execution and memory retention.",
    metric: "Multi-Agent Routing",
  },
  {
    id: "llm",
    label: "Groq & Gemini",
    sub: "Llama-3 • Flash",
    x: 690,
    y: 120,
    color: "#ff844f",
    detail: "Ultra-fast LLM inference powering Automated EDA narratives and ad creatives at LegitReach.",
    metric: "500+ tokens/sec",
  },
  {
    id: "vectors",
    label: "Vector Store",
    sub: "ChromaDB • FAISS",
    x: 480,
    y: 240,
    color: "#ff6b35",
    detail: "High-dimensional vector storage and semantic search powering the Personal Knowledge Agent (Second Brain) and RAG reasoning.",
    metric: "Cosine Sim r>0.92",
  },
  {
    id: "output",
    label: "Interactive BI",
    sub: "Plotly.js • React",
    x: 710,
    y: 250,
    color: "#ff844f",
    detail: "Real-time client visualization dashboards with sub-second parameter re-rendering.",
    metric: "60 FPS Renders",
  },
];

const links = [
  { source: nodes[0], target: nodes[1] },
  { source: nodes[1], target: nodes[2] },
  { source: nodes[2], target: nodes[3] },
  { source: nodes[1], target: nodes[4] },
  { source: nodes[2], target: nodes[4] },
  { source: nodes[3], target: nodes[5] },
  { source: nodes[4], target: nodes[5] },
];

export function ArchitectureGraph() {
  const [activeNode, setActiveNode] = useState(nodes[2]); // default to LangGraph Agent

  return (
    <div className="w-full glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-surface-border">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-surface-border">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-widest mb-1.5">
            <Network className="w-3.5 h-3.5" />
            <span>System Pipeline & Data Topology</span>
          </div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-fg">
            How I architect AI & data pipelines.
          </h3>
        </div>
        <p className="font-sans text-xs text-muted max-w-xs">
          Click or hover any node on the graph below to inspect throughput, frameworks, and architecture roles.
        </p>
      </div>

      {/* Visx / SVG Canvas */}
      <div className="w-full overflow-x-auto pb-2">
        <div className="min-w-[780px] h-[340px] relative select-none">
          <svg width="780" height="340" className="w-full h-full">
            {/* Render Links */}
            {links.map((link, i) => {
              const isConnected =
                activeNode &&
                (activeNode.id === link.source.id || activeNode.id === link.target.id);
              return (
                <g key={`link-${i}`}>
                  <line
                    x1={link.source.x}
                    y1={link.source.y}
                    x2={link.target.x}
                    y2={link.target.y}
                    stroke={isConnected ? "#ff6b35" : "rgba(255, 255, 255, 0.12)"}
                    strokeWidth={isConnected ? 2 : 1.2}
                    strokeDasharray={isConnected ? "none" : "4 4"}
                    className="transition-all duration-300"
                  />
                  {isConnected && (
                    <circle
                      r="3"
                      fill="#ff844f"
                      className="animate-pulse"
                      cx={(link.source.x + link.target.x) / 2}
                      cy={(link.source.y + link.target.y) / 2}
                    />
                  )}
                </g>
              );
            })}

            {/* Render Nodes */}
            {nodes.map((node) => {
              const isSelected = activeNode?.id === node.id;
              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setActiveNode(node)}
                  className="cursor-pointer group"
                >
                  {/* Outer pulse aura */}
                  {isSelected && (
                    <circle
                      r="30"
                      fill="#ff6b35"
                      opacity="0.15"
                      className="animate-ping"
                    />
                  )}
                  {/* Node Background */}
                  <circle
                    r="24"
                    fill="#11131c"
                    stroke={isSelected ? "#ff6b35" : "rgba(255, 255, 255, 0.18)"}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    className="transition-all duration-300 group-hover:stroke-accent"
                  />
                  {/* Inner Node Dot */}
                  <circle
                    r="5"
                    fill="#ff6b35"
                    className="transition-transform group-hover:scale-125"
                  />

                  {/* Node Label Below */}
                  <text
                    y="40"
                    textAnchor="middle"
                    fill={isSelected ? "#ffffff" : "#cbd5e1"}
                    fontSize="12"
                    fontFamily="Plus Jakarta Sans"
                    fontWeight={isSelected ? "700" : "600"}
                  >
                    {node.label}
                  </text>
                  <text
                    y="54"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="10"
                    fontFamily="JetBrains Mono"
                  >
                    {node.sub}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Node Technical Telemetry Panel */}
      {activeNode && (
        <div className="mt-4 p-4 rounded-xl bg-surface/90 border border-surface-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 bg-accent" />
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-display font-bold text-sm text-fg">
                  {activeNode.label}
                </h4>
                <span className="font-mono text-[10px] text-muted px-2 py-0.5 rounded bg-white/5 border border-white/5">
                  {activeNode.sub}
                </span>
              </div>
              <p className="font-sans text-xs text-body mt-1 leading-relaxed">
                {activeNode.detail}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/10 border border-accent/20">
            <Activity className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-xs font-semibold text-accent">
              {activeNode.metric}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
