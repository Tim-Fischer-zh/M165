MATCH (n)
OPTIONAL MATCH (n)-[r]->(m)
RETURN n, r, m;
-- MATCH (n):
-- Sucht alle Knoten in der Datenbank und weist sie der Variablen n zu.

-- OPTIONAL MATCH (n)-[r]->(m):
-- Sucht für jeden gefundenen Knoten n nach ausgehenden Beziehungen r zu einem Zielknoten m.
-- OPTIONAL bedeutet, dass auch Knoten zurückgegeben werden, die keine ausgehende Beziehung haben.
-- Diese Klausel funktioniert ähnlich wie ein Left Outer Join in SQL, sodass alle Knoten (n) angezeigt werden, auch wenn es keine passende Beziehung (r) gibt.

-- RETURN n, r, m:
-- Gibt die gefundenen Knoten, Beziehungen und zugehörigen Zielknoten zurück.

MATCH (p:Panzer)
WHERE p.Zustand = "Betriebsbereit"
RETURN p;
-- Der Anwender möchte alle Panzer abrufen, die aktuell den Zustand „Betriebsbereit“ haben.

MATCH (p:Panzer {Modell:"Leopard 2"})-[:HAT_BESATZUNG]->(b:Besatzungsmitglied)
RETURN p, b;
-- Ermitteln Sie alle Besatzungsmitglieder, die für den Panzer mit dem Modell "Leopard 2" zuständig sind.

MATCH (p:Panzer)-[:HAT_WARTUNG]->(w:Wartung)
WHERE w.Kosten > 2000
RETURN p, w;
-- Suchen Sie alle Wartungseinträge, bei denen die Kosten 2000 übersteigen, und zeigen Sie dazu den zugehörigen Panzer an.

MATCH (p:Panzer)-[:HAT_WAFFENSYSTEM]->(ws:Waffensystem)
WHERE ws.Hersteller = "FN Herstal"
RETURN p, ws;
-- Finden Sie alle Waffensysteme, die von "FN Herstal" hergestellt wurden, und zeigen Sie, welche Panzer diese Systeme verwenden.