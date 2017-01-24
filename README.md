# home-project

Model:
<p>
CREATE TABLE `member` (
  `memberid` int(11) NOT NULL,
  `name` varchar(100) default NULL,
  `dob` date default NULL,
  `mobilenumber` varchar(100) default NULL,
  PRIMARY KEY  (`memberid`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1
</p>
<p>
CREATE TABLE `income` (
  `memberid` int(11) default NULL,
  'date' date default NULL,
  'description' varchar(100) default NULL,
  `amount` varchar(100) default NULL,
  KEY `memeberid` (`memberid`),
  CONSTRAINT `salary_sal_1` FOREIGN KEY (`memberid`) REFERENCES `member` (`memberid`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1
</p>
<p>
 CREATE TABLE `expense` (
  `exid` int(11) NOT NULL,
  'date' date default NULL,
  `name` varchar(100) default NULL,
  `categoryname` varchar(100) default NULL,
  `amount` varchar(100) default NULL,
  `description` varchar(100) default NULL,
  PRIMARY KEY  (`exid`),
  KEY `name` (`name`),
  CONSTRAINT `expense_ibfk_1` FOREIGN KEY (`name`) REFERENCES `member` (`name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1
</p>

<p>
Controller:
For Report: <br>
To get Total Income: select SUM(amount) from income<br>
To get Total Expense: select SUM(amount) from expense <br>
Tally: Income - Expense
</p>
