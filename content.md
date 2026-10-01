# HAIHQ Website

## Navigation

**HAIHQ**

About  
ReFHIR  
Get Involved  
GitHub

---

# 1. Home

## Hero

# Open research and infrastructure for Health AI.

HAIHQ is a nonprofit, open-source research organization building **models, datasets, benchmarks, and tooling for Health AI.**

We research technical problems, build systems to investigate them, evaluate what works, and make the resulting work open.

**Explore our work**  
**View on GitHub**

---

## What We Work On

### Models

Healthcare-specific and healthcare-adapted AI models.

### Datasets

Open healthcare datasets for training, testing, and studying Health AI systems.

### Benchmarks

Evaluation systems for measuring capability, reliability, safety, robustness and real-world behavior.

### Tooling

Open infrastructure for building, testing and operating Health AI systems.

---

## Current Work

### ReFHIR

**Reactive FHIR infrastructure for applications and AI agents.**

ReFHIR explores what FHIR should look like when software is continuously operating over changing healthcare state.

Instead of manually combining queries, subscriptions, refetching and state reconciliation, applications and AI systems can subscribe directly to live FHIR query results.

**Explore ReFHIR →**

---

## How We Work

# Research through building.

We start with a technical question.

We build the system needed to investigate it.

We measure what happens.

Then we release the useful parts openly.

**Research → Build → Evaluate → Open**

---

## Get Involved

HAIHQ works with researchers, engineers, clinicians, healthcare organizations, universities and supporters interested in advancing open Health AI.

**Contribute · Collaborate · Sponsor**

**Get involved →**

---

# 2. About

## Hero

# Building open foundations for Health AI.

HAIHQ is a nonprofit, open-source research organization focused on models, benchmarks and technical infrastructure for Health AI.

---

## Why HAIHQ Exists

AI is advancing quickly, but healthcare introduces its own technical problems.

Healthcare systems have specialized data structures, terminology, workflows, interoperability requirements, safety constraints and operational realities.

AI systems operating in healthcare also need reliable ways to access current state, use tools, interact with existing systems and remain correct as the environment changes around them.

Those problems need dedicated research and infrastructure.

HAIHQ exists to work on them.

---

## What We Build

### Models

We explore healthcare-specific AI capabilities, architectures and applications.

### Benchmarks

We develop ways to measure how Health AI systems behave beyond simple static tests.

### Tooling

We build open infrastructure for healthcare data, interoperability, evaluation and the systems that AI models and agents rely on.

---

## How We Work

HAIHQ is driven by building and experimentation.

A project may produce:

- software;
- a benchmark;
- a model;
- a dataset;
- a specification;
- a technical report;
- or a research paper.

The goal is to leave behind useful artifacts others can inspect, reproduce and build on.

---

## Principles

**Open by default.**  
Research becomes more valuable when others can inspect and extend it.

**Measure before claiming progress.**  
Health AI systems should be evaluated against clearly defined capabilities and failure modes.

**Build to understand.**  
Working systems reveal problems theory alone may miss.

**Healthcare deserves healthcare-specific research.**  
General AI is not enough to solve every healthcare problem.

**Infrastructure matters.**  
Progress depends on more than models.

---

## Long-Term Direction

HAIHQ aims to become a home for serious open research and infrastructure in Health AI.

Our role is simple:

> **Research important problems, build useful systems, evaluate them rigorously, and make the work open.**

---

# 3. ReFHIR

## Hero

# ReFHIR

Reactive FHIR infrastructure for applications and AI agents.

**View on GitHub**  
**Read the technical report**

---

## Overview

ReFHIR explores a different programming model for healthcare applications and AI systems. Instead of treating FHIR mainly as a request-response API over healthcare data, it treats FHIR data as live application state.

Applications and AI agents can run FHIR queries and stay subscribed to their results. When underlying resources change, ReFHIR finds which active queries are affected, updates those results, and keeps connected clients aligned with committed state.

The goal is to make real-time healthcare applications and healthcare AI systems simpler to build while staying compatible with the FHIR ecosystem.

---

## The answer does not last

Every product rebuilds the list.

**When you ask**

A normal FHIR server returns the active medications. The list is true only for that moment.

**A minute later**

A clinician stops one drug and starts another. The list you are holding is wrong. So is any AI system still reading it.

**The repair**

Ask for the list. Wait for a notice. Ask again. Rebuild the list.

---

## What ReFHIR does

You subscribe to that same question. ReFHIR sends the current medication list and leaves the question open.

Added · Changed · Stopped · Deleted

When a medication is added, changed, stopped, or deleted, ReFHIR sends the list as it is now.

The application reads that list. It does not rebuild one from change notices.

---

## What an AI system gets

A health AI system reads a record, reasons about it, and may act. Other systems can change the record while it works.

ReFHIR can tell the system the answer changed, and pass it the new answer.

That does not make the system safe. It gives the system the record as it is now, rather than a copy from a minute ago.

---

## What is new

The server holds the answer.

FHIR can already send a notice that something in the record changed. The notice does not include the current medication list. Whoever receives it still has to produce the list.

ReFHIR produces the list. That work has been sitting inside each application. Here it sits in the server.

**The usual method**

Ask for the list. Wait for a notice. Ask again. Rebuild the list.

**ReFHIR**

Subscribe to the question. The list stays current.

---

## Open research

ReFHIR is part of HAIHQ. A current patient record is something Health AI has been rebuilding inside each product. The server and the technical report are public.

**View on GitHub**  
**Read the technical report**

---

# 4. Get Involved

## Hero

# Help build open Health AI.

HAIHQ works with people and organizations interested in advancing open research and infrastructure for Health AI.

---

## Contribute

Engineers, researchers, clinicians, designers and technical writers can contribute directly to HAIHQ projects.

Areas may include:

- software development;
- AI and agent systems;
- research;
- benchmarking;
- healthcare expertise;
- FHIR and interoperability;
- model evaluation;
- documentation;
- testing.

**View open projects →**

---

## Collaborate

HAIHQ is open to research partnerships with:

- universities;
- research groups;
- healthcare organizations;
- open-source communities;
- technology companies.

Collaborations may involve joint experiments, benchmark development, system evaluation, healthcare-domain expertise or shared research questions.

**Partner with HAIHQ →**

---

## Sponsor

Open research requires compute, engineering time, infrastructure and funding.

Organizations can support HAIHQ through:

- financial sponsorship;
- cloud credits;
- GPU compute;
- model inference;
- datasets;
- infrastructure;
- engineering support.

Sponsors support the work, not the conclusions.

**Sponsor HAIHQ →**

---

## Contact

Interested in contributing, collaborating or supporting HAIHQ?

**GitHub**  
For code and open-source contributions.

**Contact HAIHQ**  
contact@haihq.org. Research partnerships and sponsorship.
