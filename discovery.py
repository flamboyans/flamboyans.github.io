from pox.core import core  
import pox.openflow.libopenflow_01 as of  
from pox.lib.revent import *  
from pox.lib.recoco import Timer  
from collections import defaultdict  
from pox.openflow.discovery import Discovery  
from pox.lib.util import dpid_to_str  
import time

class topoDiscovery(EventMixin):

    def __init__(self):
        def startup():
            core.openflow.addListeners(self, priority = 0)
            core.openflow_discovery.addListeners(self)
        core.call_when_ready(startup, ('openflow','openflow_discovery'))
        print "init over"
    def _handle_LinkEvent(self, event):
        l = event.link
        sw1 = l.dpid1
        sw2 = l.dpid2
        pt1 = l.port1
        pt2 = l.port2

        print 'link added is %s'%event.added
        print 'link removed is %s' %event.removed
        print 'switch1 %d' %l.dpid1
        print 'port1 %d' %l.port1
        print 'switch2 %d' %l.dpid2
        print 'port2 %d' %l.port2

def launch():  
    core.registerNew(topoDiscovery)