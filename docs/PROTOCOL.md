# MCC Communication Protocol

## Overview

The MCC Communication Protocol defines how the Fabric Bridge and MCC Core communicate.

Communication uses WebSocket connections and JSON messages.

The protocol is versioned to allow future improvements without breaking compatibility.

---

## Architecture

```text
Minecraft Client
      │
      ▼
Fabric Bridge
      │
      ▼
WebSocket
      │
      ▼
MCC Core
